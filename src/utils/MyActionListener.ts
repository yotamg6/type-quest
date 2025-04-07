type ListenerFn<T> = (data: T) => void;

type ActionName = "KEY_PRESS" | "BACKSPACE" | "SUBMIT" | "CLEAR";

type ActionPayloads = {
  KEY_PRESS: string;
  BACKSPACE: null;
  SUBMIT: null;
  CLEAR: null;
};

export class MyActionListener {
  private actions: { [K in ActionName]?: ListenerFn<ActionPayloads[K]>[] } = {};

  registerListener<K extends ActionName>(
    action: K,
    listener: ListenerFn<ActionPayloads[K]>
  ): void {
    if (!this.actions[action]) {
      this.actions[action] = [];
    }
    this.actions[action]?.push(listener);
  }

  removeListener(action: ActionName): void {
    if (this.actions[action]) {
      delete this.actions[action];
    }
  }

  emit<K extends ActionName>(action: K, data: ActionPayloads[K]): void {
    if (!this.actions[action]) {
      throw new Error(`Can't emit an event. Event "${action}" doesn't exist.`);
      //changed "name" into "action", as I thought name can be missleading, and "action" goes well with the class name.
      // Changing this here, led me to writing all of the params and properties following this logic
    }

    for (const listener of this.actions[action]!) {
      listener(data);
    }
  }
}

const actionListener = new MyActionListener();
export default actionListener;
