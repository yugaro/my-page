export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!gaMeasurementId) return
  window.gtag('config', gaMeasurementId, {
    page_path: url,
  })
}

type Props = {
  action: string
  category: string
  label: string
  value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: Props) => {
  if (!gaMeasurementId) return
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
