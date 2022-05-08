export default class IBaseresponce {
    constructor(success?:any, message?: string, statuscode?:number, error?:string, data?:any){
        this.success = success || "Fail"
        this.message = message
        this.statuscode = statuscode || 400
        this.error = error
        this.data = data
    }
    success: string
    message: string
    statuscode: number
    error?:any
    data?: any 
}