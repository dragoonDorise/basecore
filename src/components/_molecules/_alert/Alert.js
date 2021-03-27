import React from "react";
export const Alert = ({ children, css, close = false }) => {
  return (
    <div className={`alert ${css}`} role="alert">
      {close && (
        <button
          type="button"
          class="alert__close"
          data-id-dismiss="this"
          aria-hidden="true"
        >
          <svg class="icon" role="presentation">
            <use xlinkHref="./svg/sprite.svg#close"></use>
          </svg>
        </button>
      )}

      {children}
    </div>
  );
};
