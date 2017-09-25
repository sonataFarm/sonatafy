require 'test_helper'

class Api::TracksControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_tracks_show_url
    assert_response :success
  end

end
