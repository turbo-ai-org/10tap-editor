#import "TenTapView.h"
#import <React/RCTView.h>
#import <React/RCTUIManager.h>

@interface TenTapView : RCTView
@property (nonatomic, assign) NSInteger keyboardHeight;
@property (nonatomic, copy) NSString *keyboardID;
@property (nonatomic, assign) NSInteger inputTag;
@property (nonatomic, assign) NSInteger rootBackground;
@end

@implementation TenTapView
@end

@implementation TenTapViewManager

RCT_EXPORT_MODULE(TenTapView)

RCT_EXPORT_VIEW_PROPERTY(keyboardHeight, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(keyboardID, NSString)
RCT_EXPORT_VIEW_PROPERTY(inputTag, NSInteger)
RCT_EXPORT_VIEW_PROPERTY(rootBackground, NSInteger)

- (UIView *)view
{
  return [[TenTapView alloc] init];
}

@end