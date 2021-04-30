import Chat from './Chat.vue';
import { mount, shallowMount } from '@vue/test-utils';

describe('Chat Service', () => {
    let wrapper = null;
    beforeEach( async() => {
        wrapper = mount( Chat, { propsData: {}});
    });
    afterAll(async() => {
        console.info("Cleanup hook running.");
    })
    // describe()
    it("should match the snapshot", () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it("should have a list item for every msg in props", () => {
    //  this pattern shows clearly why beforeAll / afterrAll testing should be limited
        const shallowWrapper = shallowMount(Chat, { propsData: {
            messages:[{content:"Hello"},{content:"World"}],
        }});
        expect(shallowWrapper.findAll(".message-display")).toHaveLength(2);
    });
})