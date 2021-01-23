export const handleTransitionError = (service: any, callback: Function) => {
  service.onTransition((state) => {
    if (state.changed && state.event.type.includes("error")) {
      callback();
    }
  });
};
