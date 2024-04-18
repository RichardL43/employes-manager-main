export const useRandomId = () => {
    
    const generateId = () => {
        const lengthId = 4;
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomId = "";
        for (let i = 0; i < lengthId; i++) {
          const ind = Math.floor(Math.random() * characters.length);
          randomId += characters.charAt(ind);
        }
        return randomId;
      };
      const randomId = generateId();
  
      return { randomId } 
}
