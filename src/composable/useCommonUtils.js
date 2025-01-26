export function useCommonUtils(){
    
    const checkSession = async (url) =>{
        const response = await fetch(url,{
            method:"GET",
            credentials:"include",
        });

        if (!response.ok){
            throw new Error("get session fail");
        }

        const data = await response.json();
        return data;
    }


    return {checkSession};
}