import { useRoute } from 'vue-router'

export const useBreadcrumbs = () => {
  const route = useRoute()

  // Create a breadcrumbs array
  const breadcrumbs = []

  // Always include the Home breadcrumb
  breadcrumbs.push({ text: 'Home', link: '/' })

  // If we're on the product overview page, show the "Products" breadcrumb
  if (route.path.includes('/products')) {
    breadcrumbs.push({ text: 'Products', link: '/products' })
  }

  // If we're on a product details page, show "Products" breadcrumb first
  if (route.params.id) {
    // Always add Products before the product name
    breadcrumbs.push({ text: 'Products', link: '/products' })

    // Add the current product name as the last breadcrumb
    const productName = getProductName(route.params.id)
    breadcrumbs.push({ text: productName })
  }

  return breadcrumbs
}

function getProductName(id) {
  const products = [
    { id: '1', name: 'Product A' },
    { id: '2', name: 'Product B' },
    { id: '3', name: 'Product C' },
    { id: '4', name: 'Product D' },
  ]
  const product = products.find(p => p.id === id)
  return product ? product.name : 'Product'
}
