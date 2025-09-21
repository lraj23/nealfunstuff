const msInSec = 1000;
const msInMin = 60 * msInSec;
const offset = _ => new Date().getTimezoneOffset() * msInMin;
const msInHr = 60 * msInMin;
const msInDay = 24 * msInHr;
const msInYr = year => msInDay * (new Date(new Date().getFullYear() + year, 1, 29).getDate() === 29 ? 366 : 365);
const mmInNm = 0.000001;
const mmInΜm = 1000 * mmInNm;
const mmInMm = 1000 * mmInΜm;
const mmInCm = 10 * mmInMm;
const mmInIn = 2.54 * mmInCm;
const mmInFt = 12 * mmInIn;
const mmInYd = 3 * mmInFt;
const mmInM = 100 * mmInCm;
const mmInKm = 1000 * mmInM;
const mmInMi = 1760 * mmInYd;
const mmPerMsInInPerYr = mmInIn / msInYr(0);
const mmPerMsInMiPerHr = mmInMi / msInHr;
const funcs = [
	{
		imgUrl: "tectonic-plates.jpg",
		text: "Tectonic plates move about 2 inches per year.",
		distanceFactor: 2 * mmPerMsInInPerYr
	},
	{
		imgUrl: "earth-spinning.jpg",
		text: "The Earth is spinning at about 1000 mph at the equator.",
		distanceFactor: 1000 * mmPerMsInMiPerHr + 2 * mmPerMsInInPerYr
	},
	{
		imgUrl: "earth-orbit.jpg",
		text: "The Earth is orbiting the sun at about 66000 mph.",
		distanceFactor: (66000 + 1000) * mmPerMsInMiPerHr + 2 * mmPerMsInInPerYr
	},
	{
		imgUrl: "local-group.jpg",
		text: "The sun is approaching a star called Vega at about 43000 mph.",
		distanceFactor: (43000 + 66000 + 1000) * mmPerMsInMiPerHr + 2 * mmPerMsInInPerYr
	},
	{
		imgUrl: "milky-way-orbit.jpg",
		text: "The sun is orbiting the Milky Way at about 483000 mph.",
		distanceFactor: (483000 + 43000 + 66000 + 1000) * mmPerMsInMiPerHr + 2 * mmPerMsInInPerYr
	},
	{
		imgUrl: "andromeda.jpg",
		text: "The Milky Way is approaching Andromeda at about 225000 mph.",
		distanceFactor: (225000 + 483000 + 43000 + 66000 + 1000) * mmPerMsInMiPerHr + 2 * mmPerMsInInPerYr
	},
	{
		imgUrl: "milky-way.jpg",
		text: "The Milky Way is moving at about 1300000 mph.",
		distanceFactor: (1300000 + 225000 + 483000 + 43000 + 66000 + 1000) * mmPerMsInMiPerHr + 2 * mmPerMsInInPerYr
	},
	{
		imgUrl: "universe.jpg",
		text: "The universe is expanding, so the furthest known galaxy is moving away at about 980817 kilometers per second.",
		distanceFactor: (980817 * mmInKm / msInSec)
			+ (1300000 + 225000 + 483000 + 43000 + 66000 + 1000) * mmPerMsInMiPerHr + 2 * mmPerMsInInPerYr
	},
	{
		imgUrl: "still.jpg",
		text: "Speed is based on your frame of reference! You aren't moving, are you?",
		distanceFactor: 0
	}
];
const mmToString = mm => (mm <= 0 ? mm + " units" : (mm < mmInΜm ? (mm / mmInNm).toFixed(1) + " nanometers" : (mm < mmInMm ? (mm / mmInΜm).toFixed(1) + " micrometers" : (mm < 10 * mmInCm ? mm.toFixed(1) + " millimeters" : (mm < mmInM ? (mm / mmInCm).toFixed(1) + " centimeters" : (mm < mmInKm ? (mm / mmInM).toFixed(1) + " meters" : (mm < 1000 * mmInKm ? (mm / mmInKm).toFixed(1) + " kilometers" : (mm / mmInKm).toFixed(0) + " kilometers")))))));

export default ({ func, time }) => <div className="speedItem">
	{func ? <p className="speedButWait">But wait...</p> : ""}
	<img className="speedImg" src={"https://neal.fun/speed/" + funcs[func].imgUrl} />
	<p className="speedText">{funcs[func].text}</p>
	<p className="speedDistance">{mmToString(time * funcs[func].distanceFactor) + (func === 8 ? "?" : "")}</p>
</div>;