import {fetchAll} from './fetchAll';

export async function getHabitantById(id) {
    try {
      const allHabitants = await fetchAll();
  
      if (allHabitants) {
        const habitantById = allHabitants.filter(
          (habitant) => habitant.id === parseInt(id)
        );
  
        return habitantById;
      }
    
    } catch (error) {
      throw new Error(error.message);
    }
  }