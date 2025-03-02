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

    const imagesLoad = ()=>{
        const images = import.meta.glob("@/assets/jpg/*.png", { eager: true });

        // 整理為 key-value 結構
        const imageMap = {};
        for (const path in images) {
          const fileName = path.split("/").pop(); // 取得檔案名稱
          imageMap[fileName] = images[path].default;
        }
        return imageMap
    }

    return {imagesLoad};
}