const returnValue = <T>(value: any) => value

const message = returnValue<string>("Hello Word");

const count = returnValue<number>(5);

function getFirstValueFromArray<Type>(array: Type[]){
    return array[0];
}

 