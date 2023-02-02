/*
initialInsert(preventiveData: CreatePreventiveDto) {
    const maintenances = maintenancesArray;
    return new Promise(async (resolve, reject) => {
      try {
        const allCategory = await this.findAllCategoryService.findAll();
        const allFrequency = await this.findAllFrequency.findAll();
        const allResponsible = await this.findAllResponsible.findAll();

        if (allCategory.length > 0 && maintenances.length > 0) {
          maintenances.map(async (maintenance) => {
            const category = allCategory.find((category) => category.category.toUpperCase() === maintenance.sistema.toUpperCase());
            console.log(category.category.toUpperCase() === maintenance.sistema.toUpperCase());
            const frequency = allFrequency.find((frequency) => frequency.frequency.toUpperCase() === maintenance.periodicidade.toUpperCase());
            //console.log(frequency.id);
            console.log(frequency.frequency.toUpperCase() === maintenance.periodicidade.toUpperCase());
            const responsible = allResponsible.find((responsible) => responsible.responsible.toUpperCase() === maintenance.responsavel.toUpperCase());
            //console.log(responsible.id); 
            console.log(responsible.responsible.toUpperCase() === maintenance.responsavel.toUpperCase());
            console.log(maintenance.id);           

            const categoryId = new CategoryEntity();
            categoryId.id = +category.id;

            const frequencyId = new FrequencyEntity();
            frequencyId.id = +frequency.id;

            const responsibleId = new ResponsibleEntity();
            responsibleId.id = +responsible.id;

            const preventive = new PreventiveEntity();
            preventive.category = categoryId;
            preventive.frequency = frequencyId;
            preventive.responsible = responsibleId;
            preventive.activity = maintenance.atividade;
            preventive.last = new Date(maintenance.ultima);
            preventive.next = new Date(maintenance.proxima);
            preventive.created_at = new Date();
            preventive.updated_at = new Date();
            preventive.sendEmail = true;

            console.log(preventive)

            const preventiveToBeSave = await this.preventiveRepository.save(preventive);
          })
        }
        resolve("Dados inseridos com sucesso");
      } catch (error) {
        reject(error);
      }
    })
  }
  */
