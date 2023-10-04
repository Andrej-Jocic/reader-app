import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section>
      <h1>Oops...</h1>
      <p>
        {isRouteErrorResponse(error) && 'Invalid page'}
        {error instanceof Error && error.message}
      </p>
    </section>
  );
};

export default ErrorPage;
