import { Helmet } from "react-helmet";
// import { Outlet } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import { useEffect, useState } from "react";
import "./Service.scss";

export default function Services() {
  const { get } = useFetch();
  // const [services, setServices] = useState([]);
  
  const [categories, setCategories] = useState([]);

  /* Array de objetos de PRUEBA */
  const service = [
    {
      id: 1,
      title: "Maestranza",
      category: "",
      img: "",
      description: "lalalalalalalalalalalalalala lalalalalalalalalalalalalala lalalalalalalalalalalalalala"
    },
    {
      id: 2,
      title: "Artículos",
      category: "",
      img: "",
      description: "lalalalalalalalalalalalalala lalalalalalalalalalalalalala lalalalalalalalalalalalalala"
    },
    {
      id: 3,
      title: "Sastrería",
      category: "",
      img: "",
      description: "lalalalalalalalalalalalalala lalalalalalalalalalalalalala lalalalalalalalalalalalalala"
    }
  ];

  useEffect(() => {
    // get("/services")
    //   .then((data) => setServices(data.services))
    //   .catch((error) => console.log(error));
    get("/categories")
      .then((data) => setCategories(data.categories))
      .catch((error) => console.log(error));
  }, []);
  console.log(categories);
  return (
    <>
      <Helmet>
        <title>Servicios | Limpio&Sano</title>
      </Helmet>
      <section className="services-container">
        <div>
          <h2>Servicios</h2>
        </div>
        {service.map((service) => (
          <article className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>Alquilar</button>
          </article>
        ))}

        {/* {services.map((service) => (
          <article className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))} */}
      </section>
    </>
  );
}
