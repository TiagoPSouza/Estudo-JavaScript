     /*
        Sistema de gastos familiar

        Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
            * receitas: []
            * despesas: []

            Agora crie um função que irá calcular o total de receitas e despesas e irá mostra uma mensage se a família está com saldo positivo ou negativo, seguido do valor do saldo.  
    */

            let family = {
                incomes: [2500, 3200, 250.45, 360.45],
                expences: [320.34, 128.45, 176.87, 1450.00]
            }
        
            function sum(array) {
                let total = 0;
        
                for (const value of array) {
                    total += value
                }
        
                return total;
            }
        
            function calculateBalance() {
                const calculateIncomes = sum(family.incomes)
                const calculateExpences = sum(family.expences)
        
                const total = calculateIncomes - calculateExpences
        
                const itsOk = total >= 0
        
                let balanceText = "negativo"
            
                if (itsOk) {
                    balanceText = "positivo"
                }
        
                console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
            }
        
            calculateBalance()

        