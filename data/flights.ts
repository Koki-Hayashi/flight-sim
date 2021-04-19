export type FlightData = {
  number: string
  airclaftModel: string
  destination: string
}

const flight1 = {number: "NH486", airclaftModel: "B789", destination: "HND(RJTT) - OKA(ROAH)"}
const flight2 = {number: "JL903", airclaftModel: "A359", destination: "HND(RJTT) - OKA(ROAH)"}
const flight3 = {number: "MM601", airclaftModel: "A320", destination: "NRT(RJAA) - OKA(ROAH)"}

export const flights = [flight1, flight2, flight3]

export const getFlight = (flightNumber: string) => {
  const flight = flights.find(f => f.number === flightNumber)
  if (!flight) throw new Error(`there is no flight with number ${flightNumber}.`)

  return flight
}