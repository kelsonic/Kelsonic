// Dependencies
import React, { Component } from 'react';
import each from 'lodash/each';
import keys from 'lodash/keys';
import findIndex from 'lodash/findIndex';
import includes from 'lodash/includes';


class Entity extends Component {
  static nonEntityPropNames = ['children', 'events', 'primitive'];

  static initEntity = (element) => {
    const { addEventListeners, props, updateAttributes } = this;
    if (!element) { return; }

    // Store.
    this.element = element;

    // Attach events.
    if (props.events) {
      each(keys(props.events), (eventName) => {
        addEventListeners(element, eventName, props.events[eventName]);
      });
    }

    // Update entity.
    updateAttributes(element, null, props);

    // Allow ref.
    if (props._ref) { props._ref(element); }
  };

  constructor(props) {
    super(props);
    this.addEventListeners = this.addEventListeners.bind(this);
    this.removeEventListeners = this.removeEventListeners.bind(this);
    this.updateEventListeners = this.updateEventListeners.bind(this);
    this.updateAttributes = this.updateAttributes.bind(this);
    this.doSetAttribute = this.doSetAttribute.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { element, props, updateAttributes, updateEventListeners } = this;

    // Update events.
    updateEventListeners(element, prevProps.events, props.events);

    // Update entity.
    updateAttributes(element, prevProps, props);
  }

  componentWillUnmount() {
    const { element, props, removeEventListeners } = this;

    if (props.events) {
      // Remove events.
      each(keys(props.events), (eventName) => {
        removeEventListeners(element, eventName, props.events[eventName]);
      });
    }
  }

  addEventListeners(element, eventName, handlers) {
    if (!handlers) { return; }

    // Convert to array.
    if (handlers.constructor === Function) { handlers = [handlers]; }

    // Register.
    each(handlers, (handler) => {
      element.addEventListener(eventName, handler);
    });
  }

  removeEventListeners(element, eventName, handlers) {
    if (!handlers) { return; }

    // Convert to array.
    if (handlers.constructor === Function) { handlers = [handlers]; }

    // Unregister.
    each(handlers, (handler) => {
      element.removeEventListener(eventName, handler);
    });
  }

  updateEventListeners(element, prevEvents, events) {
    if (!prevEvents || !events || prevEvents === events) { return; }
    const { addEventListeners, removeEventListeners } = this;

    each(keys(events), (eventName) => {
      // Didn't change.
      if (prevEvents[eventName] === events[eventName]) {
        return;
      }

      // If changed, remove old previous event listeners.
      if (prevEvents[eventName]) {
        removeEventListeners(element, eventName, prevEvents[eventName]);
      }

      // Add new event listeners.
      addEventListeners(element, eventName, events[eventName]);
    });

    // See if event handlers were removed.
    each(keys(prevEvents), (eventName) => {
      if (!events[eventName]) {
        removeEventListeners(element, eventName, prevEvents[eventName]);
      }
    });
  }

  updateAttributes(element, prevProps, props) {
    if (!props || prevProps === props) { return; }
    const { doSetAttribute, nonEntityPropNames } = this;

    // Set attributes.
    each(keys(props), (propName) => {
      if (!includes(nonEntityPropNames, propName)) {
        doSetAttribute(element, props, propName);
      }
    });

    // See if attributes were removed.
    if (prevProps) {
      each(keys(prevProps), (propName) => {
        if (props[propName] === undefined && !includes(nonEntityPropNames, propName)) {
          element.removeAttribute(propName);
        }
      });
    }
  }

  /**
   * Call `.setAttribute()` on the `ref`, passing prop data directly to A-Frame.
   */
  doSetAttribute(element, props, propName) {
    if (propName === 'className') {
      return element.setAttribute('class', props.className);
    }
    if (props[propName] && props[propName].constructor === Function) {
      return;
    }
    return element.setAttribute(propName, props[propName]);
  }

  /**
   * Render A-Frame DOM with ref: https://facebook.github.io/react/docs/refs-and-the-dom.html
   */
  render() {
    const props = this.props;
    const elementName = this.isScene ? 'a-scene' : (props.primitive || 'a-entity');

    // Let through props that are OK to render initially.
    let reactProps = {};
    each(keys(props), (propName) => {
      const isValidProp = findIndex(['className', 'id', 'mixin'], propName) !== -1 || findIndex(propName, 'data-') === 0;
      if (isValidProp) {
        reactProps[propName] = props[propName];
      }
    });

    return React.createElement(
      elementName,
      {
        ...reactProps,
        ref: this.initEntity,
      },
      props.children);
  }
}

export default Entity;
