import { shallowMount } from '@vue/test-utils';
import Step from '../../../../src/components/wizard/step';

describe('Step', () => {
  let propsData = {
    done: false,
    active: false,
    enable: false,
    href: '',
    title: 'Step Title',
    icon: 'fa fa-test'
  };
  let wrapper = shallowMount(Step, { propsData });
  const origin = 'https://www.url-test.com/';

  beforeEach(() => {
    delete window.location;
    window.location = { origin };
});

  it('Load step default props', () => {
    wrapper = shallowMount(Step, { });
    expect(wrapper.html()).toContain('icon-default');
    expect(wrapper.html()).toContain('btn btn-circle btn-lg step-disable');
    expect(wrapper.html()).not.toContain('active');
    expect(wrapper.html()).not.toContain('Step Title');
  });

  it('Load step done, enable, active', () => {
    propsData = {
      done: true,
      active: true,
      enable: true,
      href: 'test-path',
      title: 'Step Title',
      icon: 'fa fa-test'
    };
    wrapper = shallowMount(Step, { propsData });
    console.log(wrapper.html());
    expect(wrapper.html()).toContain('fa fa-test icon-white');
    expect(wrapper.html()).toContain('btn btn-circle btn-lg btn-border step-done');
    expect(wrapper.html()).toContain('active');
    expect(wrapper.html()).toContain('Step Title');
  });

  it('Load step not done, enable, active', () => {
    propsData = {
      done: false,
      active: true,
      enable: true,
      href: 'test-path',
      title: 'Step Title',
      icon: 'fa fa-test'
    };
    wrapper = shallowMount(Step, { propsData });
    expect(wrapper.html()).toContain('fa fa-test icon-blue');
    expect(wrapper.html()).toContain('btn btn-circle btn-lg btn-border');
    expect(wrapper.html()).toContain('active');
    expect(wrapper.html()).toContain('Step Title');
  });
});
