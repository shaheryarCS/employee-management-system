class EmployeeQuery {
    /**
     * add
     */

    public get(query:any) {
        const {skip,limit,minimumExp,maximumExp,minimumSalary,maximumSalary} = query
        const searchQuery:any = {
        };
        if (minimumExp || maximumExp) {
            const minDate = new Date();
            const maxDate = new Date();

            if (minimumExp) minDate.setFullYear( minDate.getFullYear() - minimumExp);
            if (maximumExp) maxDate.setFullYear( maxDate.getFullYear() - maximumExp);

            searchQuery.joiningDate = {...(minimumExp && {$lte: minDate}),...(maximumExp && {$gte:maxDate})}
        }

        if (minimumSalary || maximumSalary) {
            searchQuery.salary = {...(minimumSalary && {$gte: Number( minimumSalary)}),...(maximumSalary && {$lte:Number( maximumSalary)})}
        }
        let aggregateQuery:any;
        
        aggregateQuery = [
            {
                $match:{...searchQuery}
            },
            {
                $skip:Number(skip)
            },
            {
                $limit:Number(limit)
            }
        ];

        return aggregateQuery
    }

    public getSalary() {
        let aggregateQuery:any;
        
        aggregateQuery = [
            {
                $group:{ _id:"$position", avgSalary:{$avg:"$salary"} }
            },
            {
                $project:{
                    depart:"$_id",
                    avgSalary:1,
                    _id:0
                  }
            }
        ];

        return aggregateQuery
    }

    public getTopEarners(query:any) {
        const {num} = query
        let aggregateQuery:any;
        
        aggregateQuery = [
            {
                $sort:{salary: -1}
            },
            {
                $skip:Number(0)
            },
            {
                $limit:Number(num)
            }
        ];

        return aggregateQuery
    }
}

export const employeeQuery = new EmployeeQuery();