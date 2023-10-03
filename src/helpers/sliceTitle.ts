const MAX_LENGTH = 30;

// Slices the `title` if it exceeds a maximum length specified by `MAX_LENGTH`
function sliceTitle(title: string) {
  const dots = title.length > MAX_LENGTH ? '...' : '';
  return title.slice(0, MAX_LENGTH) + dots;
}

export default sliceTitle;
