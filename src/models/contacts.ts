import { model } from '@modern-js/runtime/model';

type State = {
  items: {
    avatar: string;
    name: string;
    email: string;
    archived?: boolean;
  }[];
  pending: boolean;
  error: null | Error;
};

export default model<State>('contacts').define({
  // Model Spec
  state: {
    items: [],
    pending: false,
    error: null,
  },
  computed: {
    archived: ({ items }: State) => items.filter(item => item.archived),
  },
  actions: {
    archive(draft, payload) {
      const target = draft.items.find(item => item.email === payload);
      if (target) {
        target.archived = true;
      }
    },
  },
});
