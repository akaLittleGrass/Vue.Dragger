import { mount } from '@vue/test-utils';
import App from '@/App';

describe('VueDragger', () => {
  it('mount the component', () => {
    const wrapper = mount(App);
    expect(wrapper.contains('.vueDragger')).toBe(true);
    
    const VueDragger = wrapper.find('.vueDragger');
    expect(VueDragger.name()).toBe('vueDragger');
  })
})
