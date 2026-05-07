import { ViewTransition } from 'react';

const [state, dispatch, isPending] = useActionState(async (prevState, formData) => {
  return await updateName(formData.get('name'));
}, null);

const [optimisticCount, setOptimisticCount] = useOptimistic(count);

const data = use(fetchDataPromise); // suspends until resolved
const theme = use(ThemeContext);    // same as useContext

if (isPending) {
  return <div>loading...</div>;
}

if (state) {
  if (state.error) {
    setError(state.error);
  } else {
    redirect('/path');
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>Submit</button>;
}

function MyInput({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

<ViewTransition default="slow-fade">
  {url === '/' ? <Home /> : <Details />}
</ViewTransition>