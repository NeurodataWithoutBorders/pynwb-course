def test():
    # only check that the code runs and nwbfile.identifier is in the last line of the solution
    assert "myTimeSeries.data" in __solution__.strip().splitlines()[-1], "Are you printing the time series data?"

    __msg__.good("Great job!")
