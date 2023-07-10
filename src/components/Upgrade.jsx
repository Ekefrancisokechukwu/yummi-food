import signature from "../assets/img/signature.webp";

const Upgrade = () => {
  return (
    <section className="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLY0ff72unx05obbPRy5RmRFyfoCaPP6lzHw&usqp=CAU)] bg-cover bg-fixed px-[20rem]  py-20 bg-blend-darken lg:px-[4rem]">
      <h1 className="text-3xl capitalize text-white">
        ugrade to the latest taste
      </h1>
      <div className="mt-4 ">
        <p className="text-white">
          Est sit amet facilisis magna etiam tempor. Dolor sed viverra ipsum
          nunc aliquet bibendum enim. Magnis dis parturient montes nascetur
          ridiculus mus mauris vitae ultricies. Commodo ullamcorper a lacus
          vestibulum sed arcu non odio euismod. Elementum nisi quis eleifend
          quam adipiscing vitae proin sagittis nisl. Auctor augue mauris
          gravida.
        </p>

        <p className="mt-6 text-white">
          Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
          Sodales ut eu sem integer vitae. Nibh tortor id aliquet lectus proin
          nibh. Sed velit dignissim sodales ut.
        </p>
      </div>

      <div className="mt-14 w-[11rem]">
        <img src={signature} alt="" />
      </div>

      <h4 className="mt-8 text-white">Tanya - Reciepe</h4>
    </section>
  );
};
export default Upgrade;
