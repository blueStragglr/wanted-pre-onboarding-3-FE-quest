import React from "react";
import { createBrowserHistory } from "history";

interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string | any;
  replace?: boolean;
}

export const CustomLink = React.memo<CustomLinkProps>((props) => {
  const { to, replace, onClick, children, style, ...others } = props;
  const history = createBrowserHistory({});

  const href = React.useMemo(() => {
    if (typeof to === "string") {
      return to;
    } else {
      return to.pathname;
    }
  }, [to]);

  const handleClick = React.useCallback<
    React.MouseEventHandler<HTMLAnchorElement>
  >(
    (e) => {
      onClick?.(e);

      if (e.isDefaultPrevented()) return;

      e.preventDefault();

      if (replace) {
        history.replace(to);
      } else {
        history.push(to);
      }
    },
    [to, replace, onClick]
  );

  return (
    <a style={style} href={href} onClick={handleClick}>
      {children}
    </a>
  );
});
