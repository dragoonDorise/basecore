export const TabContent = ({ children, active }) => {
  const css = active ? "is-active" : "";

  return (
    <div role="tabpanel" className={`tab-content__panel ${css}`}>
      {children}
    </div>
  );
};
