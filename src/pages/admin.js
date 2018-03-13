import React from 'react'
import CSS from 'netlify-cms/dist/cms.css'
import { init, registry } from 'netlify-cms/dist/init'

const AdminPage = () => {
  init({
    backend: {
      name: 'git-gateway',
      branch: 'master'
    },
    media_folder: 'static/img',
    public_folder: '/static/img',
    collections: {
      name: 'products',
      label: 'products',
      folder: 'static/pages',
      slug: "{{slug}}",
      create: true,
      fields: [
        {label: "SKU", name: "sku", widget: "string" },
        {label: "Price", name: "price", widget: "number"},
        {label: "Image", name: "image", widget: "string"},
        {label: "Body", name: "body", widget: "string"},
        {label: "Slug", name: "slug", widget: "string" },
        {label: "Layout", name: "layout", widget: "hidden", default: "productdetails"}
      ]
    }
  })
  return null;
}


export default AdminPage
