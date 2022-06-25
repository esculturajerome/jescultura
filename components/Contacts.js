export default function Contacts() {
  const socialLink = [
    {
      id: 1,
      title: "Email",
      url: "mailto:jerome@jescultura.com",
      text: "jerome@jescultura.com",
    },
    {
      id: 2,
      title: "Github",
      url: "https://github.com/esculturajerome",
      text: "esculturajerome",
    },
    {
      id: 3,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/jeromeescultura",
      text: "Jerome Escultura",
    },
    {
      id: 1,
      title: "Whatsapp",
      url: "https://api.whatsapp.com/send?phone=+639566754237",
      text: "+639566754237",
    },
  ];
  return (
    <div className="text-center text-sm font-light lg:text-left font-Roboto">
      <p className="mb-2 mt-14 text-gray-500 uppercase tracking-wider font-medium">
        Contact Information
      </p>
      {socialLink.map((item, i) => (
        <div key={i}>
          <p className="mt-1">
            {item.title}:{" "}
            <a
              href={item.url}
              className="text-mainColor hover:underline"
              target="_blank"
              rel="noreferrer noopener"
            >
              {item.text}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
