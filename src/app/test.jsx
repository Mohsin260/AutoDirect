const featuresFilters = {
  filters: {
    dealer_id: {
      counts: {
        "218|Autos Direct Fredericksburg": 259,
        "219|Autos Direct Manassas": 97,
      },
    },
    condition: {
      counts: {
        "Pre-owned": 356,
      },
    },
    location: {
      counts: {
        "lot|On lot": 356,
      },
    },
    make: {
      counts: {
        Acura: 5,
        "Alfa Romeo": 1,
        BMW: 6,
        Buick: 7,
        Cadillac: 11,
        Chevrolet: 40,
        Chrysler: 5,
        Dodge: 11,
        Ford: 42,
        Genesis: 2,
        GMC: 14,
        Honda: 32,
        Hyundai: 8,
        INFINITI: 3,
        Isuzu: 1,
        Jaguar: 1,
        Jeep: 9,
        Kia: 14,
        "Land Rover": 4,
        Lexus: 16,
        Lincoln: 3,
        Maserati: 2,
        Mazda: 3,
        McLaren: 1,
        "Mercedes-Benz": 24,
        Mitsubishi: 6,
        Nissan: 26,
        Porsche: 1,
        Ram: 28,
        Subaru: 4,
        Tesla: 3,
        Toyota: 61,
        Volkswagen: 3,
      },
    },
    modelgroups: {
      Acura: {
        ILX: 2,
        RDX: 2,
        TLX: 2,
      },
      "Alfa Romeo": {
        Stelvio: 1,
      },
      BMW: {
        "5 Series": 1,
        "7 Series": 1,
        M4: 1,
        X1: 1,
        X3: 2,
      },
    },
    trimgroups: {
      "Acura ILX": {
        "Premium Package": 1,
        "Technology Package": 1,
      },
      "Acura RDX": {
        "Technology Package": 2,
      },
      "Acura TLX": {
        "2.4L": 1,
        "A-Spec Package": 1,
      },
      "Alfa Romeo Stelvio": {
        Base: 1,
      },
      "BMW 5 Series": {
        "530i": 1,
      },
      "BMW 7 Series": {
        "750i xDrive": 1,
      },
      "BMW M4": {
        Competition: 1,
      },
      "BMW X1": {
        sDrive28i: 1,
      },
      "BMW X3": {
        xDrive28i: 2,
      },
    },
  },
};

<div className="pt-3 pb-2 bg-white card-header">
  <div className="card-title h6 font-weight-bold mb-2">
    1 matches
    <a
      title="Clear inventory filters"
      className="float-end font-weight-normal cursor-pointer text-primary"
      href="/used-cars"
    >
      Clear Filters
    </a>
  </div>
  <div
    href="#"
    className="d-inline-block badge-default px-2 py-0 me-2 rounded border my-1 cursor-pointer"
  >
    <span className="small">Acura</span>
    <span className="d-inline-block faIcon fa-solid fa-circle-xmark ms-2 float-end text-primary">
      <svg height={15} width={15} fill="inherit">
        <use xlinkHref="/solid.svg#circle-xmark" />
      </svg>
    </span>
  </div>
  <div
    href="#"
    className="d-inline-block badge-default px-2 py-0 me-2 rounded border my-1 cursor-pointer"
  >
    <span className="small">TLX</span>
    <span className="d-inline-block faIcon fa-solid fa-circle-xmark ms-2 float-end text-primary">
      <svg height={15} width={15} fill="inherit">
        <use xlinkHref="/solid.svg#circle-xmark" />
      </svg>
    </span>
  </div>
  <div
    href="#"
    className="d-inline-block badge-default px-2 py-0 me-2 rounded border my-1 cursor-pointer"
  >
    <span className="small">2.4L</span>
    <span className="d-inline-block faIcon fa-solid fa-circle-xmark ms-2 float-end text-primary">
      <svg height={15} width={15} fill="inherit">
        <use xlinkHref="/solid.svg#circle-xmark" />
      </svg>
    </span>
  </div>
</div>;
