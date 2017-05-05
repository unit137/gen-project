<?php header('Content-Type: text/html; charset=utf-8'); ?>
<!DOCTYPE html>
<html>
<body>
	<h3>Pages</h3>
	<ul>
		<?php
			foreach (glob("dist/*.html") as $page) {
				echo "<li><a href='$page'>$page</a></li>";
			}
		?>
	</ul>
</body>
</html>
