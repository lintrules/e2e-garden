const DASH = "\u2014";

function check(matches) {
  const reports = [];
  for (const m of matches)
    for (let i = m.text.indexOf(DASH); i !== -1; i = m.text.indexOf(DASH, i + 1)) reports.push({ match: m, at: [i, i + 1] });
  return reports;
}
