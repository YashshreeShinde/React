export interface IDistributorsData{
    data:IDistributor[],
    error:object
}

export interface IDistributor{
    
        "_id": string,
        "name": string,
        "userName": string,
        "password": string,
        "email":string,
        "role": string,
        "products": [],
        "rewards": {
            "totalPoints": string,
            "livePoints": string,
            "redeemedPoints": string,
            "lapsedPoints": string,
            "createdBy": string,
            "isDeleted": string,
            "_id": string,
            "gifts": [
                {
                    "isClaimed": string,
                    "createdBy": string,
                    "isDeleted": string,
                    "_id": string,
                    "createdAt": string,
                    "updatedAt": string
                }
            ],
            "createdAt": string,
            "updatedAt": string
        },
        "createdBy": string,
        "isDeleted": string,
        "createdAt": string,
        "updatedAt": string,
        "__v": 0
    }
