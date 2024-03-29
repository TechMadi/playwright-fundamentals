export default class CommonUtils {
    splitValue(value: any, index: any): any {
        let newValue = value.split(' ')[index];
        return newValue;
    }
}