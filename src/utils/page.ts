import { NextRouter } from 'next/router'

export const isMaintenanceCheckPage = (nextRouter: NextRouter): boolean => {
  return nextRouter.pathname == '/maintenance/check'
}

export const isErrorPage = (nextRouter: NextRouter): boolean => {
  return nextRouter.pathname == '/404'
}
