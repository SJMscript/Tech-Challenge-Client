import service from "./config.services"

const getPhonesService = () => {
    return service.get("/phones")
}

const getPhoneDetailsService = (id) => {
    return service.get(`/phones/${id}`)
}

export {
    getPhonesService,
    getPhoneDetailsService
}