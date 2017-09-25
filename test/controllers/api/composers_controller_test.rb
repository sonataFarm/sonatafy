require 'test_helper'

class Api::ComposersControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get api_composers_show_url
    assert_response :success
  end

end
