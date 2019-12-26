<template>
<div class="vueDragger" :style="style" @mousedown="handleMouseDown" @wheel="handleMouseWheel">
    <slot></slot>
</div>
</template>

<script>

export default {
    name: 'vueDragger',
    props: {
        areaLimits: {
            type: Object,
            default: function () {
                return {
                    minTop: null,
                    maxTop: null,
                    minRight: null,
                    maxRight: null,
                    minBottom: null,
                    maxBottom: null,
                    minLeft: null,
                    maxLeft: null
                }
            }
        },
        parentLimitation: {
            type: Boolean, 
            default: true
        },
        useZoom: {
            type: Boolean,
            default: false
        },
        w: {
            type: Number,
            default: 100,
            validator: function (v) {
                return v > 0;
            }
        },
        h: {
            type: Number,
            default: 100,
            validator: function (v) {
                return v > 0;
            }
        },
        zIndex: {
            type: Number,
            default: 10
        }
    },
    data: function () {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            newTop: 0,
            newLeft: 0,
            scale: 1
        }
    },
    created: function () {
        this.toDoDrag = false;
        this.toDoZoom = false;
        this.startPosition = {
            mouseX: 0,
            mouseY: 0
        }
    },
    mounted: function () {
        const parent = this.$el.parentNode;
        this.parentWidth = parent.clientWidth;
        this.parentHeight = parent.clientHeight;

        document.documentElement.addEventListener('mouseup', this.globalMouseUp);
        document.documentElement.addEventListener('mousemove', this.globalMouseMove);
    },
    beforeDestroy: function () {
        document.documentElement.removeEventListener('mouseup', this.globalMouseUp);
        document.documentElement.removeEventListener('mousemove', this.globalMouseMove);
    },
    methods: {
        handleMouseWheel(e) {
            if (!this.useZoom) return;
            e.stopPropagation();
            e.preventDefault();
            let newScale = this.scale;
            if (e.wheelDelta > 0) newScale += 0.25;
            if (e.wheelDelta < 0) newScale -= 0.25;
            newScale = Math.min(3.5, newScale);
            newScale = Math.max(1, newScale);
            this.scale = newScale;
        },
        globalMouseUp() {
            this.toDoDrag = false;
        },
        handleMouseDown(e) {
            if (e.button && e.button !== 0) return;
            e.stopPropagation();
            e.preventDefault();
            this.$emit('clicked', e);
            this.toDoDrag = true;
            this.startPosition.mouseX = e.pageX;
            this.startPosition.mouseY = e.pageY;
            this.startPosition.top = this.top;
            this.startPosition.left = this.left;
        },
        globalMouseMove(e) {
            if (!this.toDoDrag) return;
            const pageX = e.pageX;
            const pageY = e.pageY;
            this.newTop = this.startPosition.top + pageY - this.startPosition.mouseY;
            this.newLeft = this.startPosition.left + pageX - this.startPosition.mouseX;
            this.$emit('moving', {
                top: this.top,
                left: this.left
            });
        }
    },
    computed: {
        style() {
            return {
                top: `${this.top}px`,
                left: `${this.left}px`,
                width: `${this.w}px`,
                transform: `scale(${this.scale})`,
                zIndex: this.zIndex
            }
        }
    },
    watch: {
        newTop(newValue) {
            const areaLimits = this.areaLimits;
            if (typeof areaLimits.minTop === 'number' && areaLimits.minTop > newValue) {
                newValue = areaLimits.minTop;
            }
            if (typeof areaLimits.maxTop === 'number' && areaLimits.maxTop < newValue) {
                newValue = areaLimits.maxTop;
            }
            if (typeof areaLimits.minBottom === 'number' && areaLimits.minBottom > this.parentHeight - this.h - newValue) {
                newValue = this.parentHeight - this.h - areaLimits.minBottom;
            }
            if (typeof areaLimits.maxBottom === 'number' && areaLimits.maxBottom < this.parentHeight - this.h - newValue) {
                newValue = this.parentHeight - this.h - areaLimits.maxBottom;
            }
            if (this.parentLimitation) {
                if (newValue < 0) newValue = 0;
                if (newValue > this.parentHeight - this.h) newValue = this.parentHeight - this.h;
            } 
            this.top = newValue;
        },
        newLeft(newValue) {
            const areaLimits = this.areaLimits;
            if (typeof areaLimits.minLeft === 'number' && areaLimits.minLeft > newValue) {
                newValue = areaLimits.minLeft;
            }
            if (typeof areaLimits.maxLeft === 'number' && areaLimits.maxLeft < newValue) {
                newValue = areaLimits.maxLeft;
            }
            if (typeof areaLimits.minRight === 'number' && areaLimits.minRight > this.parentWidth - this.w - newValue) {
                newValue = this.parentWidth - this.w - areaLimits.minRight;
            }
            if (typeof areaLimits.maxRight === 'number' && areaLimits.maxRight < this.parentWidth - this.w - newValue) {
                newValue = this.parentWidth - this.w - areaLimits.maxRight;
            }
            if (this.parentLimitation) {
                if (newValue < 0) newValue = 0;
                if (newValue > this.parentWidth - this.w) newValue = this.parentWidth - this.w;
            }
            this.left = newValue;
        }
    }
}
</script>

<style scoped>
.vueDragger{
    position: absolute;
    box-sizing: border-box;
}
</style>