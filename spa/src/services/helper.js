export const getRouteName = (route) => {
  switch (route) {
    case '/dashboard':
      return 'Dashboard'
    case '/dashboard/error':
      return 'Error'
    case '/nova-movimentacao':
      return 'Nova movimentação'
  }
}
