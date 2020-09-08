import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status='wazup!'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('wazup!');
    });

    test("<span> should be displayed after creation", () => {
        const component = create(<ProfileStatus status='wazup!'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("<input> shouldn't be displayed after creation", () => {
        const component = create(<ProfileStatus status='wazup!'/>);
        const root = component.root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    });

    test("<span> should contain correct status after creation", () => {
        const component = create(<ProfileStatus status='wazup!'/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('wazup!');
    });

    test("<input> should be displayed in editMode instead of <span>", () => {
        const component = create(<ProfileStatus status='wazup!'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('wazup!');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='wazup!' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});