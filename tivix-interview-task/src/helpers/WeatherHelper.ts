class WeatherHelper {
    static getMeanValue = (means: number[])  => {
        return (means.reduce((a,b) => a + b, 0) / means.length).toFixed(2);
    }
}

export default WeatherHelper;