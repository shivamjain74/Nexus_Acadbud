
export const registerFormControls = [
    {
      name: "userName",
      label: "User Name",
      placeholder: "Enter your user name",
      componentType: "input",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];
  
  export const loginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];
  
  export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id:"men", label: "Electrician" }, // men
        { id: "women", label: "Painter" }, // painter
        { id: "kids", label: "Plumber" }, // plumber
        { id: "accessories", label: "Reparing" }, // accessories 
        { id: "footwear", label: "others" }, // footwear
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "nike", label: "Student" }, // nike
        { id: "adidas", label: "Bachelors" }, // adidas
        { id: "puma", label: "Family" }, // puma
        { id: "levi", label: "Senior Citizen" }, // levi
        { id: "zara", label: "Bulk" }, // zara
        { id: "h&m", label: "Contract" }, // h&m
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];
  
  export const shoppingViewHeaderMenuItems = [
    {
      id: "home",
      label: "Home",
      path: "/shop/home",
    },
    {
      id: "products",
      label: "Services",
      path: "/shop/listing",
    },
    {
      id:"men",
      label: "Electrician",
      path: "/shop/listing",
    },
    {
      id: "women",
      label: "Painter",
      path: "/shop/listing",
    },
    {
      id: "kids",
      label: "Plumber",
      path: "/shop/listing",
    },
    {
      id: "accessories",
      label: "Reparing",
      path: "/shop/listing",
    },
    {
      id: "footwear",
      label: "Others",
      path: "/shop/listing",
    },
    {
      id: "search",
      label: "Search",
      path: "/shop/search",
    },
  ];
  
  export const categoryOptionsMap = {
    men: "Men",
    women: "Women",
    kids: "Kids",
    accessories: "Accessories",
    footwear: "Footwear",
  };
  
  export const brandOptionsMap = {
    nike: "Nike",
    adidas: "Adidas",
    puma: "Puma",
    levi: "Levi",
    zara: "Zara",
    "h&m": "H&M",
  };
  
  export const filterOptions = {
    category: [
      { id:"men", label: "Electrician" },
      { id: "women", label: "Painter" },
      { id: "kids", label: "Plumber" },
      { id: "accessories", label: "Repairing" },
      { id: "footwear", label: "Others" },
    ],
    brand: [
      { id: "nike", label: "Students" },
      { id: "adidas", label: "Bachelors" },
      { id: "puma", label: "Family" },
      { id: "levi", label: "Senior Citizen" },
      { id: "zara", label: "Bulk" },
      { id: "h&m", label: "Contract" },
    ],
  };
  
  export const sortOptions = [
    { id: "price-lowtohigh", label: "Price: Low to High" },
    { id: "price-hightolow", label: "Price: High to Low" },
    { id: "title-atoz", label: "Title: A to Z" },
    { id: "title-ztoa", label: "Title: Z to A" },
  ];
  
  export const addressFormControls = [
    {
      label: "Address",
      name: "address",
      componentType: "input",
      type: "text",
      placeholder: "Enter your address",
    },
    {
      label: "City",
      name: "city",
      componentType: "input",
      type: "text",
      placeholder: "Enter your city",
    },
    {
      label: "Pincode",
      name: "pincode",
      componentType: "input",
      type: "text",
      placeholder: "Enter your pincode",
    },
    {
      label: "Phone",
      name: "phone",
      componentType: "input",
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      label: "Notes",
      name: "notes",
      componentType: "textarea",
      placeholder: "Enter any additional notes",
    },
  ];
  