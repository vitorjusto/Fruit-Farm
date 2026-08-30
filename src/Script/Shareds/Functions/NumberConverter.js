// Suffixes for each power-of-1000 tier, in order (index 0 = 10^3, index 1 = 10^6, ...)
const SUFFIXES = [
    "k", "M", "B", "T", "q", "Q", "s", "S", "O", "N",
    "d", "u", "D", "Td", "qd", "Qd", "sd", "Sd", "Od", "Nd",
    "V", "uv", "dv", "qv", "Qv", "sv", "Sv", "Ov", "Nv", "Tr",
    "ut", "dt", "tt", "qt", "Qt", "st", "St", "Ot", "Nt", "qn",
    "uq", "dq", "tq", "qq", "Qq", "sq", "Sq", "Oq", "Nq", "Qn",
    "uQ", "dQ", "tQ", "qQ", "QQ", "sQ", "SQ", "OQ", "NQ", "sn",
    "us", "ds", "Ts", "qs", "Qs", "ss", "Ss", "Os", "Ns", "Sn",
    "uS", "dS", "TS", "qS", "QS", "sS", "SS", "OS", "NS", "On",
    "uO", "dO", "TO", "qO", "QO", "sO", "SO", "OO", "NO", "Nn",
    "uN", "dN", "TN", "qN", "QN", "sN", "SN", "ON", "NN", "C",
    "uC", "dC"
];
 
export function ConvertMoneyNumber(num) 
{
    if (num < 1000) {
        return num.toFixed(2);
    }
 
    let tier = Math.floor(Math.log10(num) / 3);
 
    if (tier > SUFFIXES.length) {
        tier = SUFFIXES.length;
    }
 
    let divisor = Math.pow(1000, tier);
    let scaled = num / divisor;

    if (parseFloat(scaled.toPrecision(3)) >= 1000 && tier < SUFFIXES.length) {
        tier += 1;
        divisor = Math.pow(1000, tier);
        scaled = num / divisor;
    }
 
    const suffix = SUFFIXES[tier - 1];
    return scaled.toPrecision(3) + suffix;
}