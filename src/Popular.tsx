
function MyComponent() {
  return (
    <div className="flex flex-col self-center w-full max-w-[1162px] max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start px-8 pt-2.5 pb-1 w-full rounded-3xl bg-zinc-100 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="text-4xl font-bold text-lime-800">Раи</div>
        <div className="flex gap-5 self-stretch my-auto text-2xl font-semibold text-neutral-400 max-md:flex-wrap">
          <div className="grow">О нас</div>
          <div>Меню</div>
          <div>Отзывы</div>
          <div className="flex-auto">Контакты</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ddf74653d6df52e68779abcd926eed68110563941d292becd113c64c0e92afa?"
          className="shrink-0 mt-2 w-11 aspect-[1.1]"
        />
      </div>
      <div className="mt-28 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col font-semibold text-black max-md:mt-10 max-md:max-w-full">
              <div className="text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                Онлайн меню, для вашего удобства{" "}
              </div>
              <div className="mt-16 text-xl max-md:mt-10 max-md:max-w-full">
                возможности делать предзаказы и видеть новые ежедневные блюда!
              </div>
              <div className="justify-center self-center px-11 py-5 mt-6 text-2xl tracking-tighter bg-red-400 rounded-[35px] max-md:px-5">
                Оформить заказ
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="..."
              className="mt-1 w-full aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

