import {
    type RouteConfig,
    route,
  } from "@react-router/dev/routes";
  
  export default [

    route("/", "./routes/home.tsx"),
      route("contact", "routes/contact.tsx"),
      route("vehicles", "routes/vehicles.tsx"),
      route("about", "routes/about.tsx"),
      route("locations", "routes/locations.tsx"),
      route("book", "routes/book.tsx"),
// Other routes
    route("api/preview-mode/enable", "routes/api/preview-mode/enable.ts"),
    route("api/preview-mode/disable", "routes/api/preview-mode/disable.ts"),
  ] satisfies RouteConfig;