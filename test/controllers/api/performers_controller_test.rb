require 'test_helper'

class Api::PerformersControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_performers_show_url
    assert_response :success
  end

end
