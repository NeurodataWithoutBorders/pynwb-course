def test():
    # only check that the code runs and x is in the last line of the solution
    assert "nwbfile.acquisition['MyTimeSeries']" in __solution__.strip().splitlines()[-1], "Use the name of the time series to get it from nwbfile.acquisition"

    __msg__.good("Nice work!")
