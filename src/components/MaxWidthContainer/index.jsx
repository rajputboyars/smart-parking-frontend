function MaxWidthContainer(props) {
  const { children, id, extraClasses = "" } = props;
  return (
    <>
      <div
        className={`max-w-[var(--breakpoint-medium)] scroll-mt-20 md:scroll-mt-15 mx-auto px-6 py-4 md:px-15 md:py-4 ${extraClasses}`}
        id={id}
      >
        {children}
      </div>
    </>
  );
}

export default MaxWidthContainer;
