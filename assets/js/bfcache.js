const flow = await startFlow(page);

// This navigation will not test the bfcache
// because it is part of a user flow.
await flow.navigate('https://potestade.com.br');

// This timespan will try to restore the page from the bfcache.
// Problems restoring from the bfcache are surfaced in this report.
await flow.startTimespan();
await page.goto('https://potestade.com.br');
await page.goBack();
await flow.endTimespan();